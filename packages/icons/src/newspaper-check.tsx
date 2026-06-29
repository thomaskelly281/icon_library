import { mdiNewspaperCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NewspaperCheck(props: IconComponentProps) {
  return <Icon path={mdiNewspaperCheck} {...props} />;
}

export { mdiNewspaperCheck as path };
