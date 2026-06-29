import { mdiUbisoft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ubisoft(props: IconComponentProps) {
  return <Icon path={mdiUbisoft} {...props} />;
}

export { mdiUbisoft as path };
