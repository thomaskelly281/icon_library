import { mdiCheckboxMultipleBlank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMultipleBlank(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMultipleBlank} {...props} />;
}

export { mdiCheckboxMultipleBlank as path };
