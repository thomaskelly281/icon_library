import { mdiMore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function More(props: IconComponentProps) {
  return <Icon path={mdiMore} {...props} />;
}

export { mdiMore as path };
