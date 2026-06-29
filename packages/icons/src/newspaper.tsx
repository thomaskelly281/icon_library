import { mdiNewspaper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Newspaper(props: IconComponentProps) {
  return <Icon path={mdiNewspaper} {...props} />;
}

export { mdiNewspaper as path };
