import { mdiTrainVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainVariant(props: IconComponentProps) {
  return <Icon path={mdiTrainVariant} {...props} />;
}

export { mdiTrainVariant as path };
