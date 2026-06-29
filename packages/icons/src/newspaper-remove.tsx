import { mdiNewspaperRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NewspaperRemove(props: IconComponentProps) {
  return <Icon path={mdiNewspaperRemove} {...props} />;
}

export { mdiNewspaperRemove as path };
