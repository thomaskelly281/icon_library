import { mdiFilterMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterMinus(props: IconComponentProps) {
  return <Icon path={mdiFilterMinus} {...props} />;
}

export { mdiFilterMinus as path };
