import { mdiArrowLeftTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftTop(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftTop} {...props} />;
}

export { mdiArrowLeftTop as path };
