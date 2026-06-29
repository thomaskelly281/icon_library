import { mdiTrainCarHopper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarHopper(props: IconComponentProps) {
  return <Icon path={mdiTrainCarHopper} {...props} />;
}

export { mdiTrainCarHopper as path };
