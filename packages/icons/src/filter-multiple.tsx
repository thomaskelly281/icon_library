import { mdiFilterMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterMultiple(props: IconComponentProps) {
  return <Icon path={mdiFilterMultiple} {...props} />;
}

export { mdiFilterMultiple as path };
