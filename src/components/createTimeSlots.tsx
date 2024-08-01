import React, { useCallback } from 'react';
import { Container } from '@ldo/solid';
import { useLdo } from '@ldo/solid-react';
import { TimeSlotShapeType } from "../.ldo/fhir.shapeTypes";
import { generate2ByteUUID } from '../utils/tool';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  state: boolean;
}

interface Props {
  mainContainer: Container;
  doctorId: string;
  slots: TimeSlot[];
}

const CreateTimeSlots: React.FC<Props> = ({ mainContainer, slots }) => {
  const { createData, commitData } = useLdo();

  const createSlots = useCallback(async () => {
    if (!mainContainer) return;

    const slotsContainer = mainContainer.child("timeSlots/");
    await slotsContainer.createIfAbsent();

    for (const slot of slots) {
      const slotResource = slotsContainer.child(`${slot.id}.ttl`);
      const timeSlot = createData(
        TimeSlotShapeType,
        slotResource.uri,
        slotResource
      );
      timeSlot.start = slot.startTime;
      timeSlot.end = slot.endTime;
      timeSlot.identifier = generate2ByteUUID();
      timeSlot.status = true;
      timeSlot.location = "Southampton";
      const result = await commitData(timeSlot);
      if (result.isError) {
        alert(result.message);
      } else {
        console.log(`Time slot ${slot.id} created successfully.`);
      }
    }
  }, [mainContainer, slots, createData, commitData]);

  return (
    <div>
      <button onClick={createSlots}>Create Time Slots</button>
    </div>
  );
};

export default CreateTimeSlots;

