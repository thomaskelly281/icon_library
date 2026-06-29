import { mdiGolfTee } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GolfTee(props: IconComponentProps) {
  return <Icon path={mdiGolfTee} {...props} />;
}

export { mdiGolfTee as path };
