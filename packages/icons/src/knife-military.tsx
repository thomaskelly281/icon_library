import { mdiKnifeMilitary } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KnifeMilitary(props: IconComponentProps) {
  return <Icon path={mdiKnifeMilitary} {...props} />;
}

export { mdiKnifeMilitary as path };
