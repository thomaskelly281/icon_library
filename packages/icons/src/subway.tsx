import { mdiSubway } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Subway(props: IconComponentProps) {
  return <Icon path={mdiSubway} {...props} />;
}

export { mdiSubway as path };
