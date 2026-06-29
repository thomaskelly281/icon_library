import { mdiTimerSandEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSandEmpty(props: IconComponentProps) {
  return <Icon path={mdiTimerSandEmpty} {...props} />;
}

export { mdiTimerSandEmpty as path };
