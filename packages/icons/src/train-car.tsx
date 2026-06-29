import { mdiTrainCar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrainCar(props: IconComponentProps) {
  return <Icon path={mdiTrainCar} {...props} />;
}

export { mdiTrainCar as path };
