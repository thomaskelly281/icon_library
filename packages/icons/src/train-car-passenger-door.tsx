import { mdiTrainCarPassengerDoor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarPassengerDoor(props: IconComponentProps) {
  return <Icon path={mdiTrainCarPassengerDoor} {...props} />;
}

export { mdiTrainCarPassengerDoor as path };
