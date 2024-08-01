import React, { useCallback } from 'react';
import { Container, GetWacRuleSuccess } from '@ldo/solid';

interface Props {
  mainContainer: Container;
}

const CreateACL: React.FC<Props> = ({ mainContainer }) => {
  const setACL = useCallback(async () => {
    if (mainContainer) {
      console.log("MainContainer valid");

      const wacRulesResult = await mainContainer.getWac();

      if (!wacRulesResult.isError) {
        const wacRules = (wacRulesResult as GetWacRuleSuccess).wacRule;
          
        wacRules.public = {
          read: true,
          write: true,
          append: true,
          control: false,
        };
        const result = await mainContainer.setWac(wacRules);
        console.log("ACL result:", result);
      }
    }
  }, [mainContainer]);

  return (
    <div>
      <button onClick={setACL}>Set ACL</button>
    </div>
  );
};

export default CreateACL;

