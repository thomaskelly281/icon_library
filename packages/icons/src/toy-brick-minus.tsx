import { mdiToyBrickMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickMinus(props: IconComponentProps) {
  return <Icon path={mdiToyBrickMinus} {...props} />;
}

export { mdiToyBrickMinus as path };
