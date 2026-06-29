import { mdiKickstarter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kickstarter(props: IconComponentProps) {
  return <Icon path={mdiKickstarter} {...props} />;
}

export { mdiKickstarter as path };
