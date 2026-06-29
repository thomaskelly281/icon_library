import { mdiFanAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanAuto(props: IconComponentProps) {
  return <Icon path={mdiFanAuto} {...props} />;
}

export { mdiFanAuto as path };
