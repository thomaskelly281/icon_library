import { mdiKnife } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Knife(props: IconComponentProps) {
  return <Icon path={mdiKnife} {...props} />;
}

export { mdiKnife as path };
