import { mdiToyBrickRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickRemove(props: IconComponentProps) {
  return <Icon path={mdiToyBrickRemove} {...props} />;
}

export { mdiToyBrickRemove as path };
