import { mdiTrainCarBoxOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarBoxOpen(props: IconComponentProps) {
  return <Icon path={mdiTrainCarBoxOpen} {...props} />;
}

export { mdiTrainCarBoxOpen as path };
