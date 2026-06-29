import { mdiNewspaperMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NewspaperMinus(props: IconComponentProps) {
  return <Icon path={mdiNewspaperMinus} {...props} />;
}

export { mdiNewspaperMinus as path };
