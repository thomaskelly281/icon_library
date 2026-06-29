import { mdiArrowExpandVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandVertical(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandVertical} {...props} />;
}

export { mdiArrowExpandVertical as path };
