import { mdiXamarin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Xamarin(props: IconComponentProps) {
  return <Icon path={mdiXamarin} {...props} />;
}

export { mdiXamarin as path };
