import { mdiPinterest } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pinterest(props: IconComponentProps) {
  return <Icon path={mdiPinterest} {...props} />;
}

export { mdiPinterest as path };
