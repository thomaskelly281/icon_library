import { mdiTrainBus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainBus(props: IconComponentProps) {
  return <Icon path={mdiTrainBus} {...props} />;
}

export { mdiTrainBus as path };
