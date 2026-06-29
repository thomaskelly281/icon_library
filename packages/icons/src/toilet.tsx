import { mdiToilet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Toilet(props: IconComponentProps) {
  return <Icon path={mdiToilet} {...props} />;
}

export { mdiToilet as path };
