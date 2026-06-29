import { mdiGoogle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Google(props: IconComponentProps) {
  return <Icon path={mdiGoogle} {...props} />;
}

export { mdiGoogle as path };
