import { mdiTrainCarPassenger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarPassenger(props: IconComponentProps) {
  return <Icon path={mdiTrainCarPassenger} {...props} />;
}

export { mdiTrainCarPassenger as path };
