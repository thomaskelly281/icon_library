import { mdiSpaceInvaders } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpaceInvaders(props: IconComponentProps) {
  return <Icon path={mdiSpaceInvaders} {...props} />;
}

export { mdiSpaceInvaders as path };
