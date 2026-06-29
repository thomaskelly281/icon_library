import { mdiOpenInApp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OpenInApp(props: IconComponentProps) {
  return <Icon path={mdiOpenInApp} {...props} />;
}

export { mdiOpenInApp as path };
