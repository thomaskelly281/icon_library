import { mdiNewspaperPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NewspaperPlus(props: IconComponentProps) {
  return <Icon path={mdiNewspaperPlus} {...props} />;
}

export { mdiNewspaperPlus as path };
