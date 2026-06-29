import { mdiToyBrickPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickPlus(props: IconComponentProps) {
  return <Icon path={mdiToyBrickPlus} {...props} />;
}

export { mdiToyBrickPlus as path };
