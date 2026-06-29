import { mdiToyBrick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrick(props: IconComponentProps) {
  return <Icon path={mdiToyBrick} {...props} />;
}

export { mdiToyBrick as path };
