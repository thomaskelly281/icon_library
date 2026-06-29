import { mdiTrainCarContainer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCarContainer(props: IconComponentProps) {
  return <Icon path={mdiTrainCarContainer} {...props} />;
}

export { mdiTrainCarContainer as path };
