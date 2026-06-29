import { mdiTrainCarBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarBox(props: IconComponentProps) {
  return <Icon path={mdiTrainCarBox} {...props} />;
}

export { mdiTrainCarBox as path };
