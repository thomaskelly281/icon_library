import { mdiCheckboxMultipleBlankCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMultipleBlankCircle(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMultipleBlankCircle} {...props} />;
}

export { mdiCheckboxMultipleBlankCircle as path };
