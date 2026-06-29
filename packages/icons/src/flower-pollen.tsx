import { mdiFlowerPollen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlowerPollen(props: IconComponentProps) {
  return <Icon path={mdiFlowerPollen} {...props} />;
}

export { mdiFlowerPollen as path };
