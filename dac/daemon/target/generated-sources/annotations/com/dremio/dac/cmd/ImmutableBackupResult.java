package com.dremio.dac.cmd;

import com.dremio.dac.util.BackupRestoreUtil;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.MoreObjects;
import com.google.errorprone.annotations.CanIgnoreReturnValue;
import com.google.errorprone.annotations.Var;
import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.CheckReturnValue;
import javax.annotation.Nullable;
import javax.annotation.ParametersAreNonnullByDefault;
import javax.annotation.concurrent.Immutable;
import javax.annotation.concurrent.NotThreadSafe;
import org.immutables.value.Generated;

/**
 * Immutable implementation of {@link Backup.BackupResult}.
 * <p>
 * Use the builder to create immutable instances:
 * {@code new ImmutableBackupResult.Builder()}.
 */
@Generated(from = "Backup.BackupResult", generator = "Immutables")
@SuppressWarnings({"all"})
@SuppressFBWarnings
@ParametersAreNonnullByDefault
@javax.annotation.processing.Generated("org.immutables.processor.ProxyProcessor")
@Immutable
@CheckReturnValue
final class ImmutableBackupResult implements Backup.BackupResult {
  private final int exitStatus;
  private final @Nullable BackupRestoreUtil.BackupStats backupStats;

  private ImmutableBackupResult(
      int exitStatus,
      @Nullable BackupRestoreUtil.BackupStats backupStats) {
    this.exitStatus = exitStatus;
    this.backupStats = backupStats;
  }

  /**
   * @return The value of the {@code exitStatus} attribute
   */
  @JsonProperty("exitStatus")
  @Override
  public int getExitStatus() {
    return exitStatus;
  }

  /**
   * @return The value of the {@code backupStats} attribute
   */
  @JsonProperty("backupStats")
  @Override
  public Optional<BackupRestoreUtil.BackupStats> getBackupStats() {
    return Optional.ofNullable(backupStats);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Backup.BackupResult#getExitStatus() exitStatus} attribute.
   * A value equality check is used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for exitStatus
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableBackupResult withExitStatus(int value) {
    if (this.exitStatus == value) return this;
    return new ImmutableBackupResult(value, this.backupStats);
  }

  /**
   * Copy the current immutable object by setting a <i>present</i> value for the optional {@link Backup.BackupResult#getBackupStats() backupStats} attribute.
   * @param value The value for backupStats
   * @return A modified copy of {@code this} object
   */
  public final ImmutableBackupResult withBackupStats(BackupRestoreUtil.BackupStats value) {
    BackupRestoreUtil.BackupStats newValue = Objects.requireNonNull(value, "backupStats");
    if (this.backupStats == newValue) return this;
    return new ImmutableBackupResult(this.exitStatus, newValue);
  }

  /**
   * Copy the current immutable object by setting an optional value for the {@link Backup.BackupResult#getBackupStats() backupStats} attribute.
   * A shallow reference equality check is used on unboxed optional value to prevent copying of the same value by returning {@code this}.
   * @param optional A value for backupStats
   * @return A modified copy of {@code this} object
   */
  @SuppressWarnings("unchecked") // safe covariant cast
  public final ImmutableBackupResult withBackupStats(Optional<? extends BackupRestoreUtil.BackupStats> optional) {
    @Nullable BackupRestoreUtil.BackupStats value = optional.orElse(null);
    if (this.backupStats == value) return this;
    return new ImmutableBackupResult(this.exitStatus, value);
  }

  /**
   * This instance is equal to all instances of {@code ImmutableBackupResult} that have equal attribute values.
   * @return {@code true} if {@code this} is equal to {@code another} instance
   */
  @Override
  public boolean equals(@Nullable Object another) {
    if (this == another) return true;
    return another instanceof ImmutableBackupResult
        && equalTo(0, (ImmutableBackupResult) another);
  }

  private boolean equalTo(int synthetic, ImmutableBackupResult another) {
    return exitStatus == another.exitStatus
        && Objects.equals(backupStats, another.backupStats);
  }

  /**
   * Computes a hash code from attributes: {@code exitStatus}, {@code backupStats}.
   * @return hashCode value
   */
  @Override
  public int hashCode() {
    @Var int h = 5381;
    h += (h << 5) + exitStatus;
    h += (h << 5) + Objects.hashCode(backupStats);
    return h;
  }

  /**
   * Prints the immutable value {@code BackupResult} with attribute values.
   * @return A string representation of the value
   */
  @Override
  public String toString() {
    return MoreObjects.toStringHelper("BackupResult")
        .omitNullValues()
        .add("exitStatus", exitStatus)
        .add("backupStats", backupStats)
        .toString();
  }

  /**
   * Utility type used to correctly read immutable object from JSON representation.
   * @deprecated Do not use this type directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Generated(from = "Backup.BackupResult", generator = "Immutables")
  @Deprecated
  @SuppressWarnings("Immutable")
  @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.NONE)
  static final class Json implements Backup.BackupResult {
    int exitStatus;
    boolean exitStatusIsSet;
    @Nullable Optional<BackupRestoreUtil.BackupStats> backupStats = Optional.empty();
    @JsonProperty("exitStatus")
    public void setExitStatus(int exitStatus) {
      this.exitStatus = exitStatus;
      this.exitStatusIsSet = true;
    }
    @JsonProperty("backupStats")
    public void setBackupStats(Optional<BackupRestoreUtil.BackupStats> backupStats) {
      this.backupStats = backupStats;
    }
    @Override
    public int getExitStatus() { throw new UnsupportedOperationException(); }
    @Override
    public Optional<BackupRestoreUtil.BackupStats> getBackupStats() { throw new UnsupportedOperationException(); }
  }

  /**
   * @param json A JSON-bindable data structure
   * @return An immutable value type
   * @deprecated Do not use this method directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Deprecated
  @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
  static ImmutableBackupResult fromJson(Json json) {
    ImmutableBackupResult.Builder builder = new ImmutableBackupResult.Builder();
    if (json.exitStatusIsSet) {
      builder.setExitStatus(json.exitStatus);
    }
    if (json.backupStats != null) {
      builder.setBackupStats(json.backupStats);
    }
    return builder.build();
  }

  /**
   * Creates an immutable copy of a {@link Backup.BackupResult} value.
   * Uses accessors to get values to initialize the new immutable instance.
   * If an instance is already immutable, it is returned as is.
   * @param instance The instance to copy
   * @return A copied immutable BackupResult instance
   */
  public static ImmutableBackupResult copyOf(Backup.BackupResult instance) {
    if (instance instanceof ImmutableBackupResult) {
      return (ImmutableBackupResult) instance;
    }
    return new ImmutableBackupResult.Builder()
        .from(instance)
        .build();
  }

  /**
   * Builds instances of type {@link ImmutableBackupResult ImmutableBackupResult}.
   * Initialize attributes and then invoke the {@link #build()} method to create an
   * immutable instance.
   * <p><em>{@code Builder} is not thread-safe and generally should not be stored in a field or collection,
   * but instead used immediately to create instances.</em>
   */
  @Generated(from = "Backup.BackupResult", generator = "Immutables")
  @NotThreadSafe
  public static final class Builder {
    private int exitStatus;
    private @Nullable BackupRestoreUtil.BackupStats backupStats;

    /**
     * Creates a builder for {@link ImmutableBackupResult ImmutableBackupResult} instances.
     * <pre>
     * new ImmutableBackupResult.Builder()
     *    .setExitStatus(int) // optional {@link Backup.BackupResult#getExitStatus() exitStatus}
     *    .setBackupStats(com.dremio.dac.util.BackupRestoreUtil.BackupStats) // optional {@link Backup.BackupResult#getBackupStats() backupStats}
     *    .build();
     * </pre>
     */
    public Builder() {
    }

    /**
     * Fill a builder with attribute values from the provided {@code BackupResult} instance.
     * Regular attribute values will be replaced with those from the given instance.
     * Absent optional values will not replace present values.
     * @param instance The instance from which to copy values
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder from(Backup.BackupResult instance) {
      Objects.requireNonNull(instance, "instance");
      this.setExitStatus(instance.getExitStatus());
      Optional<BackupRestoreUtil.BackupStats> backupStatsOptional = instance.getBackupStats();
      if (backupStatsOptional.isPresent()) {
        setBackupStats(backupStatsOptional);
      }
      return this;
    }

    /**
     * Initializes the value for the {@link Backup.BackupResult#getExitStatus() exitStatus} attribute.
     * @param exitStatus The value for exitStatus 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder setExitStatus(int exitStatus) {
      this.exitStatus = exitStatus;
      return this;
    }

    /**
     * Initializes the optional value {@link Backup.BackupResult#getBackupStats() backupStats} to backupStats.
     * @param backupStats The value for backupStats
     * @return {@code this} builder for chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder setBackupStats(BackupRestoreUtil.BackupStats backupStats) {
      this.backupStats = Objects.requireNonNull(backupStats, "backupStats");
      return this;
    }

    /**
     * Initializes the optional value {@link Backup.BackupResult#getBackupStats() backupStats} to backupStats.
     * @param backupStats The value for backupStats
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder setBackupStats(Optional<? extends BackupRestoreUtil.BackupStats> backupStats) {
      this.backupStats = backupStats.orElse(null);
      return this;
    }

    /**
     * Builds a new {@link ImmutableBackupResult ImmutableBackupResult}.
     * @return An immutable instance of BackupResult
     * @throws java.lang.IllegalStateException if any required attributes are missing
     */
    public ImmutableBackupResult build() {
      return new ImmutableBackupResult(exitStatus, backupStats);
    }
  }
}
