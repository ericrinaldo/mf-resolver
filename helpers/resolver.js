import fs from 'fs';

export default ({consumer, consumerStage, module}) => {

  const data = fs.readFileSync('./data/modules.json');
  const modules = JSON.parse(data);

  const cdn = modules[module].cdn;
  const version = modules[module].consumers[consumer][consumerStage];
  const path = `${cdn}/${module}/${version}/remoteEntry.js`;

  return { path };
};
