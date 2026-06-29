import { mdiDatabase } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Database(props: IconComponentProps) {
  return <Icon path={mdiDatabase} {...props} />;
}

export { mdiDatabase as path };
