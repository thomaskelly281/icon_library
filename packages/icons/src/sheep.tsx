import { mdiSheep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sheep(props: IconComponentProps) {
  return <Icon path={mdiSheep} {...props} />;
}

export { mdiSheep as path };
