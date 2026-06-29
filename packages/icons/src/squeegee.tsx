import { mdiSqueegee } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Squeegee(props: IconComponentProps) {
  return <Icon path={mdiSqueegee} {...props} />;
}

export { mdiSqueegee as path };
