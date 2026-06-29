import { mdiAccountFileText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountFileText(props: IconComponentProps) {
  return <Icon path={mdiAccountFileText} {...props} />;
}

export { mdiAccountFileText as path };
