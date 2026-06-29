import { mdiTrainCarGondola } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarGondola(props: IconComponentProps) {
  return <Icon path={mdiTrainCarGondola} {...props} />;
}

export { mdiTrainCarGondola as path };
