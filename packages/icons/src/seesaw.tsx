import { mdiSeesaw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Seesaw(props: IconComponentProps) {
  return <Icon path={mdiSeesaw} {...props} />;
}

export { mdiSeesaw as path };
