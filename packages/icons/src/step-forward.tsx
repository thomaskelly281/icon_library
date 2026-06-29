import { mdiStepForward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StepForward(props: IconComponentProps) {
  return <Icon path={mdiStepForward} {...props} />;
}

export { mdiStepForward as path };
