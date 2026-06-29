import { mdiFlowerPoppy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlowerPoppy(props: IconComponentProps) {
  return <Icon path={mdiFlowerPoppy} {...props} />;
}

export { mdiFlowerPoppy as path };
