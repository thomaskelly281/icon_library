import { mdiTrainCarTank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarTank(props: IconComponentProps) {
  return <Icon path={mdiTrainCarTank} {...props} />;
}

export { mdiTrainCarTank as path };
