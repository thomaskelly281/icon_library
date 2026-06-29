import { mdiBookRemoveMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookRemoveMultiple(props: IconComponentProps) {
  return <Icon path={mdiBookRemoveMultiple} {...props} />;
}

export { mdiBookRemoveMultiple as path };
